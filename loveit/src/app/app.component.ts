import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loveit';
}

post = [ {  
title: 'firstPost',  
content: 'coucou je suis le premier post de cette longue serie d\'exercice',
loveIts: 1,  
created_at: new Date()
},

{  
title: 'secondPost',  
content: 'coucou je suis le second post de cette longue serie d\'exercice',
loveIts: 2,  
created_at: new Date()
},

{  
title: 'thirtPost',  
content: 'coucou je suis le thirt post de cette longue serie d\'exercice',
loveIts: 3,  
created_at: new Date()
},

{  
title: 'forthPost',  
content: 'coucou je suis le forth post de cette longue serie d\'exercice',
loveIts: 4,  
created_at: new Date()
}];

