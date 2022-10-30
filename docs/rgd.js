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

		let newWidth = $('menu').css('width','').innerWidth()

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