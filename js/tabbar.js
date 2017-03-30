document.getElementById('home').addEventListener('tap', function() {
    mui.openWindow({
        url: 'home.html',
        id: 'home',
		show: {
            autoShow: true,
            aniShow: 'slide-in-right'
        },
        waiting: {
            autoShow: true,
			title:'正在加载...'
        }
    });
});
document.getElementById('product').addEventListener('tap', function() {
    mui.openWindow({
        url: 'product-list.html',
        id: 'product',
        show: {
            autoShow: true,
            aniShow: 'slide-in-right'
        },
        waiting: {
            autoShow: true,
			title:'正在加载...'
        }
    });
});
document.getElementById('cart').addEventListener('tap', function() {
    mui.openWindow({
        url: 'cart.html',
        id: 'cart',
        show: {
            autoShow: true,
            aniShow: 'slide-in-right'
        },
        waiting: {
            autoShow: true,
			title:'正在加载...'
        }
    });
});
document.getElementById('order').addEventListener('tap', function() {
    mui.openWindow({
        url: 'order.html',
        id: 'order',
        show: {
            autoShow: true,
            aniShow: 'slide-in-right'
        },
        waiting: {
            autoShow: true,
			title:'正在加载...'
        }
    });
});
document.getElementById('manage').addEventListener('tap', function() {
    mui.openWindow({
        url: 'manage.html',
        id: 'manage',
        show: {
            autoShow: true,
            aniShow: 'slide-in-right'
        },
        waiting: {
            autoShow: true,
			title:'正在加载...'
        }
    });
});
