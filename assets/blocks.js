CaxtonBlock( {
	id      : 'caxton-boilerplate/demo',
	title   : 'Caxton boilerplate',
	icon    : 'star-filled',
	category: 'layout',
	tpl: "<h2 style='color:{{Text color}};{{border}}' class='fw4 mv2'>{{Content}}</h2>",
	fields: {

		'Text color' : {
			// Key is the ID for the field, replaces {{Text color}} in the template with value
			// Key is used as label by default
			type: 'color',
			default: '#e91d63',
			section: 'Layout',
		},
		'border' : { // Replaces {{border}} in the template with value
			label: 'Border width', // Optional label different from id
			type: 'range',
			default: '#e91d63',
			section: 'Layout',
			tpl: 'border:%spx solid;', // %s is replaced with value in tpl which then replaces {{border}} in block tpl
		},
		'Content': {
			type: 'editable', // Editable in tpl in editor/
			default: 'Some content here',
		},
	},
} );


