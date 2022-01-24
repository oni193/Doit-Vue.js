// 실습 #1 : todo-footer 컴포넌트 전역 등록
// <p> This is another global child component</p> 를 template 갖는 컴포넌트 등록 

Vue.component('todo-footer', {
    template : '<p> This is another global child component</p>'
});

var cmp = {
    template : '<p> This is another local child component</p>'
} 
// 인스턴스 영역
var app = new Vue ({
    el: '#app',
    data: {
        messsage : 'This is a parent component'
    },
    components : {
        'todo-list' : cmp
    }
});

// 실습 #2 : todo-list 컴포넌트 전역 등록
// <p> This is another local child component</p> 를 template 갖는 컴포넌트 등록 

