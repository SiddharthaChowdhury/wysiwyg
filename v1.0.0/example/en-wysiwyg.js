function Wysiwyg(conf){
	this.boxWidth = conf.width || '100%';
	this.boxHeight = conf.height || '100vh';
	this.wrapper = conf.container;
	// this.box = this.getWYSISWYG();
}

Wysiwyg.prototype.init = function(){
	
	var shell = this.getparent();
	shell.appendChild(this.getToolBar());


	// console.log(editor_wrapper)
	document.querySelector(this.wrapper).appendChild(shell);
}

Wysiwyg.prototype.getparent = function(){
	var editor_wrapper = document.createElement('div');
	editor_wrapper.setAttribute('style', 'background-color:#C0C0C0; width:'+this.boxWidth+'; height:'+this.boxHeight+';');
	editor_wrapper.setAttribute('class', 'en-wysiwyg-wrapper');
	return editor_wrapper;
}

Wysiwyg.prototype.getToolBar = function(){
	var btn_wrapper = document.createElement('div');
	btn_wrapper.setAttribute('class','en-wysiwyg-wrapper-toolbar');
	var buttons = [
	  'en-wysiwyg-tool-bold|<b>B</b>',
	  'en-wysiwyg-tool-bold|<i>I</i>',
	  'en-wysiwyg-tool-bold|<u>U</u>',
	];

	for(var i in buttons){
		var btn = document.createElement('button');
		var btn_arr = buttons[i].split('|');
		btn.setAttribute('class', btn_arr[0]);
		btn.innerHTML = btn_arr[1];
		btn_wrapper.appendChild(btn);
	}
	return btn_wrapper;
}