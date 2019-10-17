# About generalisation

I think one of the most important things in configuration management is to generalise a subject or aspect to a manageable proportion. This means that:

If you have specific aspects, be as explicit about your terms as you think needed. 

Whenever you have reusability in mind try and find as generic possible terms.

## In more complex situations

Even in more complex situations, it can relieve you from a lot of naming convention hassle, since you can use generic names for your variables and models in your templates and be specific in your store.

<picture of store with specific terms and templates with generalist terms>

Be as explicit about your terms in the store as you think needed. 

Use as generic possible terms in your templates.

Let's say we have an array of photos in the store's submodule `module-photos.js`

stored in `recentPhotos`

    const ModulePhotos = {
      namespaced: true,
    
      state: {
        photos: [],
        recentPhotos: [
          {
            title: "Some picture of a picture",
            url:
              "https://images.unsplash.com/photo-1495808089756-688a7abff51d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3889&q=80"
          },
          {
            title: "Another picture of a picture",
            url:
              "https://images.unsplash.com/photo-1460339594641-eb86e8402669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80"
          }
        ]
      }
    };
    
    export { ModulePhotos };

And we have a template that can display photos, wether they are recent or not.

So now we use our aliassing tool to connect them:

[thrash](thrash-94fe9415-233a-41a6-a9b2-2d72fde36531.md)