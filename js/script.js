// スライダー
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true, // ループの指定
    effect: "fade", //フェードの指定
    autoplay: {
        delay: 4000, //４秒後に次のスライドへ
        disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
    },
    speed: 2000, //２秒かけてフェードで切り替わる
    allowTouchMove: false,//マウスでのスワイプを禁止
});

$(function () {
    // ドロワーメニュー
    $('.drawer_icon').on('click', function(e) {
        e.preventDefault();
        $('.drawer').toggleClass('is-active');
        $('body').toggleClass('noscroll');
        return false;
    });
    
    $('.drawer_close').on('click', function(e) {
        e.preventDefault();
        $('.drawer').removeClass('is-active');
        $('body').removeClass('noscroll');
        return false;
    });

    // トップへ戻る
    $('a[href^="#"').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        },
        500);
        return false;
    });

    $(window).on('scroll', function() {
        if( 100 < $(this).scrollTop()) {
            $('.totop').addClass('is-show');
        } else {
            $('.totop').removeClass('is-show');
        }
        return false;
    });

    // タブ
    $('.tab_nav ul li span').click(function(e) {
        e.preventDefault ();
        let target = $(this).data("target");
        $('.tab_nav ul li span').removeClass('is-active');
        $(this).addClass('is-active');
        $('.tab_item').removeClass('is-active');
        $(target).addClass('is-active');
        return false;
    });
})    

