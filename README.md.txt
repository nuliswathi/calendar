			          Calendar App

Calendar App is developed using React JS.

By the end of development of Calendar App, I've learnt the following :

-> How data can be passed from parent comp to child comp through props.
-> How data can be accessed by child comp through props.propname.
-> Functions can also be passed as props from parent to child component.
-> Functions available as props can be accessed using props.propname and pass data back
    to parent component.
-> Using state object and how to modify state object using setState().
    When state is modified using setState() the react app gets re-rendered.(Updates DOM)

-> How JS expressions are embedded in JSX.

Calendar App consists of following components :
         
       App.js
          Form.js
          Calendar.js
	DisplayCalnedar.js

Here, App component is the parent component and  Form & Calendar comp's are sibbling 
Comp's. The data b/w 2 sibbling components can be shared by passing data back to parent 
comp (App) and from Parent to another sibbling comp (Calendar.js) .

The main adv. of React is "Reusability".
-> Re-usable comp. in this app is "DisplayCalendar" which displays calendar of every month
within the specified data range .

    
