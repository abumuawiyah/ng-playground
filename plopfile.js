module.exports = function (plop) {

    plop.setHelper('lowerCase', (txt) => txt.toLowerCase());

    plop.setGenerator('component', {
        description: 'template for components',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Component name:'
        }, {
            type: 'input',
            name: 'description',
            message: 'Describe this component:'
        }],
        actions: [{
            type: 'add',
            path: 'projects/atomic-component/src/lib/components/{{lowerCase name}}/{{lowerCase name}}.component.ts',
            templateFile: 'plop-templates/component.hbs'
        },
        {
            type: 'add',
            path: 'projects/atomic-component/src/lib/components/{{lowerCase name}}/{{lowerCase name}}.component.spec.ts',
            templateFile: 'plop-templates/component.spec.hbs'
        }]
    });

    plop.setGenerator('story', {
        description: 'template for story',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Story name:'
        }, {
            type: 'input',
            name: 'description',
            message: 'Describe this story:'
        }],
        actions: [{
            type: 'add',
            path: 'src/stories/{{lowerCase name}}/{{lowerCase name}}.stories.ts',
            templateFile: 'plop-templates/story.hbs'
        }]
    });

};
