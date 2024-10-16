 class User {
       constructor(username, password) {
         this.username = username;
         this._password = password;
     		 this.user = { username: username};
         this.login = function(credentials) {      
            if (credentials.username === this.username && credentials.password === this._password) {
             console.log(`${this.username} logged in success.`);
             return true;
           } else {
             throw new Error("Invalid User or Password.");
           }
         };

         this.logout = function() {
           console.log(`${this.username} logged out`);
         };
    
         this.getProfile = function() {
           return this.user
         };
       }
     }
