//------------------------------------------変数の宣言----------------------------------------------------------------

var $all_checked=$('#all_check');
var $all_removed=$('#all_remove');
var $checkbox=$('.check');

//------------------------------------------チェックボックスの処理------------------------------------------------------

$all_checked.on('click',function(e){
	e.preventDefault();
	$checkbox.prop('checked',true);
});

$all_removed.on('click',function(e){
	e.preventDefault();
	$checkbox.prop('checked',false);
});
