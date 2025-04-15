//allow user to automatically navigate through thr app, especially with unique ids in the URL

const routes =require('next-routes')();
routes
    .add('/buyspace/:address','/buyspace/RentalSystemInfo')
    .add('/buyspace/:address/requests', '/buyspace/requests/index');

    module.exports=routes;
