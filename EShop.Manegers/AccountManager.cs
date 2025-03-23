using EF_Core;
using EF_Core.Models;
using EShop.ViewModels;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;


namespace EShop.Manegers
{
    public class AccountManager:BaseManager<User>
    {
        private UserManager<User> UserManager;
        private SignInManager<User> signInManager;
        public AccountManager(
            EShopContext context,
            UserManager<User> _UserManager,
            SignInManager<User> _signInManager
            )
            : base(context)
        {
            UserManager = _UserManager;
            signInManager = _signInManager;

        }


        public async Task<IdentityResult> Register(UserRegisterVM userRegister)
        {

            var res=  await UserManager.CreateAsync(userRegister.ToModel(), userRegister.Password);
            if (res.Succeeded)
            {
                User user =await UserManager.FindByNameAsync(userRegister.UserName);

                res =  await  UserManager.AddToRoleAsync(user, userRegister.Role);

                if(userRegister.Role == "Vendor")
                {
                    //
                }else if (userRegister.Role == "Client")
                {
                    //
                }
            }
            return res;
        }

        public async Task<SignInResult> Login(UserLoginVM vmodel)
        {
            //if correct Email
            var User = await UserManager.FindByEmailAsync(vmodel.Method);
            if(User != null)
             return await  signInManager.PasswordSignInAsync(User, vmodel.Password, true, true);
            else
             return await  signInManager.PasswordSignInAsync(vmodel.Method, vmodel.Password, true, true);
        }
    }
}
