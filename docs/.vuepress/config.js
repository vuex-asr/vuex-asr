module.exports = {
    base: '/vuex-asr/',
    head: [
        ['link', { rel: 'icon', href: '../vue-logo.png' }]
    ],
    title: 'Vuex ASR',
    description: 'Automated store resolution for Vue.js',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/step-by-step-guide/hello-world-example.html'},
            {text: 'Cheatsheet', link: '/helpers/cheat-sheet.html'},
            {text: 'Contribute', link: '/helpers/contribute.html'},
            {text: 'Github', link: 'https://github.com/vuex-asr/vuex-asr'}
        ],
        sidebar: [
            {
                title: 'Introduction',   // required
                collapsable: false, // optional, defaults to true
                displayAllHeaders: true, // Default: false
                sidebarDepth: 2,    // optional, defaults to 1
                children: [
                    '/',
                ]
            },
            {
                title: 'Step by step guide',   // required
                collapsable: false, // optional, defaults to true
                displayAllHeaders: true, // Default: false
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                    '/step-by-step-guide/prerequisite.html',
                    '/step-by-step-guide/installation.html',
                    '/step-by-step-guide/hello-world-example.html',
                    '/step-by-step-guide/getters-example.html',
                    '/step-by-step-guide/hello-world-of-2-way-binding.html',
                    '/step-by-step-guide/mutations.html',
                    '/step-by-step-guide/actions.html',
                    '/step-by-step-guide/aliasing.html',
                    '/step-by-step-guide/namespacing.html',
                    '/step-by-step-guide/passing-bindings.html',
                    '/step-by-step-guide/binding-multiple-objects-to-a-component.html',
                    '/step-by-step-guide/binding-a-configuration.html',
                ]
            },
            {
                title: 'Helpers',   // required
                collapsable: false, // optional, defaults to true
                displayAllHeaders: true, // Default: false
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                    '/helpers/asr-debug.html',
                    '/helpers/working-with-the-test-suite.html',
                    '/helpers/cheat-sheet.html',
                ]
            },
        ],
    },
}