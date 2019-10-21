module.exports = {
    head: [
        ['link', { rel: 'icon', href: '../vue-logo.png' }]
    ],
    title: 'Vuex ASR',
    description: 'Automated store resolution for Vue.js',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/learn-by-example/hello-world-example.html'},
            {text: 'Cheatsheet', link: '/helpers/cheat-sheet.html'},
            {text: 'Contribute', link: '/helpers/contribute.html'},
            {text: 'Github', link: 'https://github.com'}
        ],
        sidebar: [
            // {
            //     title: 'Quick overview',   // required
            //     collapsable: false, // optional, defaults to true
            //     displayAllHeaders: true, // Default: false
            //     sidebarDepth: 1,    // optional, defaults to 1
            //     children: [
            //         '/learn-by-example/installation.html',
            //         '/quick-overview/binders.html',
            //         '/quick-overview/config.html',
            //
            //     ]
            // },
            {
                title: 'Learn by example',   // required
                collapsable: false, // optional, defaults to true
                displayAllHeaders: true, // Default: false
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                    '/learn-by-example/prerequisite.html',
                    '/learn-by-example/installation.html',
                    '/learn-by-example/hello-world-example.html',
                    '/learn-by-example/getters-example.html',
                    '/learn-by-example/hello-world-of-2-way-binding.html',
                    '/learn-by-example/aliasing.html',
                    '/learn-by-example/namespacing.html',
                    '/learn-by-example/passing-bindings.html',
                    '/learn-by-example/binding-multiple-objects-to-a-component.html',
                    '/learn-by-example/binding-a-configuration.html',
                ]
            },
            {
                title: 'Helpers',   // required
                collapsable: false, // optional, defaults to true
                displayAllHeaders: true, // Default: false
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                    '/helpers/cheat-sheet.html',
                    '/helpers/working-with-the-test-suite.html',
                ]
            },
            // {
            //     title: 'More advanced subjects',   // required
            //     collapsable: false, // optional, defaults to true
            //     displayAllHeaders: true, // Default: false
            //     sidebarDepth: 1,    // optional, defaults to 1
            //     children: [
            //         '/more-advanced-subjects/introduction.html',
            //     ]
            // },
        ],
    },
}