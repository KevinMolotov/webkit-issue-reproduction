// NO MEMORY LEAK HERE

// var test = new Vue({
//     el: '.container',
//     data: {
//         val: [],
//     },
// })

// function testLoop() {
//     for (var i = 0; i <= 100; i++) {
//         test.val.push(
//             Math.PI * Math.PI * (Math.random() * 100)
//         )
//     }

//     setTimeout(function() {
//         test.val = [];
//         setTimeout(function() {
//             testLoop();
//         })
//     }, 500);
// }

// testLoop();



// NOT MEMORY LEAK? 

var vm = new Vue({
    el: '.container',
    data: {
        comps: []
    },
    render: function(h) {
        return h('div', this.comps)
    }
})

function testLoop() {
    for (var i = 0; i <= 1000; i++) {
        vm.comps.push(new Vue({
            render: function(h) {
                return h('div', Math.PI * Math.PI * (Math.random() * 100))
            }
        }))
    }

    setTimeout(function() {
        vm.comps = [];
        setTimeout(function() {
            testLoop();
        })
    }, 500);
}

testLoop();