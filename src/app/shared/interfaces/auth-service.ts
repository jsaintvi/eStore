export interface IAuthService {
   signup(email, password);

   registerUser(form);

   login(email, password);

   logout();

   getUserData(userId);
}
