//Utils
import './scss/style.scss';

import loader from './utils/rootloader';

//temps
import authorisation from './pages/index.hbs';

import simpleForm from './partials/components/composite/simpleForm/index.js';
import button from './partials/components/simple/button/index.js';
import button from './partials/components/simple/textInput/index.js';
import button from './partials/components/simple/link/index.js';
import button from './partials/components/simple/textLine/index.js';


const data = {
	table_data: {
        h1_title: 'Authorisation',
        id: 'authorisation-form',
        method: 'POST',
        columns: [
            {
                inputs: [
                    {
                        type: 'text',
                        name: 'login',
                        palceholder: 'login',
                    },
                    {
                        type: 'password',
                        name: 'login',
                        palceholder: 'login',
                    },
                ]
            }                
        ],
        submit_text: "Enter",
        extra_links: [
            {
                href: '/registration',
                text: 'Create accaunt'
            }
        ],
        extra_texts:[
            {
                extra_classes: 'simple-sign_warinig',
                text: 'Login or password is wrong' 
            }
        ]

    }
}
  

console.log(authorisation(data));

loader(authorisation, data);
