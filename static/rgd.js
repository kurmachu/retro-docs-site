$(":not(menu) > .directory .subcontents").css('height','0px').css('display', 'none')
$(":not(menu) > .directory").addClass("closed")
$('menu').on('click','.directory-name', function(){
	let directory = $(this).parent()
	if(directory.data('timeout')){
		clearTimeout(directory.data('timeout'))
	}
	if (directory.hasClass('closed')){

		let oldWidth = $('menu').innerWidth()

		let subcontents = directory.children('.subcontents')
		subcontents.css('height','').css('display','')//TODO: upgrade

		let newHeight = subcontents.height()
		let newWidth = $('menu').css('width','').innerWidth()

		subcontents.css('height', 0).height()
		subcontents.css('height', newHeight)
		$('menu').css('width', oldWidth).innerWidth()
		$('menu').css('width', newWidth)
		directory.removeClass('closed')
		let timeout = window.setTimeout(()=>{
			subcontents.css('height', '')
			$('menu').css('width', '')
			directory.data('timeout', '')
		},500)
		directory.data('timeout', timeout)
	}else{
		let subcontents = directory.children('.subcontents')

		let oldWidth = $('menu').innerWidth()
		let oldHeight = subcontents.height()
		
		subcontents.css('height',0).css('display','none')//TODO: upgrade

		let oldToolWidth = $('.tools').width()
		$('.tools').width(0)
		let newWidth = $('menu').css('width','').innerWidth()
		$('.tools').width(oldToolWidth)

		subcontents.css('height', oldHeight).css('display','').height()
		subcontents.css('height', 0)
		$('menu').css('width', oldWidth).innerWidth()
		$('menu').css('width', newWidth)
		directory.addClass('closed')
		let timeout = window.setTimeout(()=>{
			subcontents.css('height', 0).css('display','none')
			$('menu').css('width', '')
		},500)
		directory.data('timeout', timeout)
	}
})

$('menu a.current').parentsUntil('menu','.directory').each(function(){
	$(this).addClass('current').removeClass('closed').children('.subcontents').css({
		height: '',
		display: ''
	})
})

var toolbar_timeout = -1
$('.toolbarIcon').on('click', function(){
	if(toolbar_timeout>=0){
		window.clearTimeout(toolbar_timeout)
	}
	if($(this).hasClass('selected')){
		$(this).removeClass('selected')
		$('.dialogue-arrow').removeClass("selected")
		$('.tool-bubble').addClass('hidden')
		toolbar_timeout = window.setTimeout(()=>{
			$('.tool-bubble-contents').css('display','none')
			toolbar_timeout = -1
		},300)
		return
	}
	$('.toolbarIcon').removeClass('selected')
	$(this).addClass('selected')

	$('.dialogue-arrow').removeClass("selected")
	$($('.dialogue-arrow')[$(this).index()]).addClass("selected")

	$('.tool-bubble-contents').css('display','none')
	$('.tool-bubble').removeClass('hidden sync lang theme info').addClass($(this).data('is'))
	$(`#${$(this).data('open')}`).css('display', '')
	$('menu')[0].scrollTo(0, $('menu')[0].scrollHeight);
})


new ResizeObserver(entries => {
	$('.tools').width(entries[0].contentRect.width)
}).observe($('menu')[0])

addEventListener('load', ()=>{
	$('.tools').width(0).width($('menu').width())
})


$('.theme-selector').on('change', function(){
	localStorage.setItem("theme", $(this).val())
	// let toRemove = $(`<style>
	// 	* {
	// 		transition: all 1s;
	// 	}
	// </style>`)
	// toRemove.appendTo($('body'))
	document.getElementById("theme-zone").href = `/retro-docs-site/themes${localStorage.getItem("theme")}`
	// window.setTimeout(()=>{
	// 	$(toRemove).remove()
	// },1000)
	updateThemeMeta()
})

function updateThemeMeta(){
	let meta = $('.theme-selector option:selected').data("meta")
	if(meta){
		$('.theme-meta-none').css('display', 'none')
		$('.theme-meta-zone').css('display', '')

		$('#theme-meta-ver-warning').css('display', meta.ver>=1? 'none':'')
		$('#theme-meta-author').text(meta.author)
		$('#theme-meta-description').text(meta.description? meta.description : "")
	}else{
		$('.theme-meta-none').css('display', '')
		$('.theme-meta-zone').css('display', 'none')
	}
}

$('.theme-selector').val(localStorage.getItem("theme"))
updateThemeMeta()