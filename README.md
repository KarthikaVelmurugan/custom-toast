# React Reusable Component - Custom Toast Window

The pupose of this package, to show the toast window after triggering the any event.

## NPM Package installation command

npm i custom-toast-window-reuse

Ref : https://www.npmjs.com/package/custom-toast-window-reuse

## Importing the custom toast

import { CustomAlert } from 'custom-toast-window-reuse';

## Call custom alert toast component

  const [alert, setalert] = useState({
    active: false,
    type: null,
    message: null,
  });

    <CustomAlert alert={alert} setAlert={setalert}></CustomAlert>
    
  ## Allowed values of "alert" state values
  active : false/true - If it is active, the alert window will appear otherwise not.
  type : success/error
  message : <content> - The content would like to appear in the toast alert window.

  ## Screenshot
  
![Screenshot from 2022-10-25 09-19-06](https://user-images.githubusercontent.com/64409033/197731602-3dacdcbb-8470-4d61-ac8e-b41f4c7f7991.png)
