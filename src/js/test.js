/**
 * Created by zchao on 2017/6/6.
 */
function changeProgress(view) {
    view.value += 5;
    if(view.value >= view.max){
        view.value = 0;
    }
}
