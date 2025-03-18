$(function () {
    // 다음 버튼 클릭
    $('.next').on('click', function () {
        const $imageList = $(this).siblings('ul'); // 현재 버튼의 형제 요소 중 <ul>
        slideImage($imageList);
    });

    // 이전 버튼 클릭
    $('.prev').on('click', function () {
        const $imageList = $(this).siblings('ul'); // 현재 버튼의 형제 요소 중 <ul>
        $imageList
            .prepend($imageList.children(':last')) // 마지막 슬라이드를 맨 앞으로 이동
            .css('margin-left', '-100%') // 초기 위치 설정
            .animate({ marginLeft: 0 }); // 슬라이드 애니메이션
            
    });

    // 슬라이드 이동 함수
    function slideImage($imageList) {
        $imageList.animate({ marginLeft: '-100%' }, function () {
            $(this).removeAttr('style').children(':first').appendTo(this); // 첫 번째 슬라이드를 맨 뒤로 이동
        });
    }

   
    


});