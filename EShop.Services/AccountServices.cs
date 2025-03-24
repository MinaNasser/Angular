using EF_Core.Models;
using EShop.Manegers;
using EShop.ViewModels;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace EShop.Services
{
    public class AccountServices 
    {
        AccountManager accountManager;
        VendorManager vendorManager;
        ClientManager clientManager;
        public AccountServices(
            AccountManager _accountManager,
            VendorManager _vendorManager,
            ClientManager _clientManager
            )
        {
            accountManager = _accountManager;
            vendorManager = _vendorManager;
            clientManager = _clientManager;
        }

        public  async Task<IdentityResult> CreateAccount(UserRegisterVM user )
        {
            var userRes =  await accountManager.Register(user);
            
            if (userRes.Succeeded)
            {
                var currentUser = await accountManager.FindByUserName(user.UserName);
                if (user.Role == "Vendor")
                {
                    //Add Record In Vendor table
                    vendorManager.Add(new Vendor() { UserId = currentUser.Id });
                }
                else if (user.Role == "Client")
                {
                    //Add Record In Client table
                    clientManager.Add(new Client { UserId = currentUser.Id });
                }

            }
            return IdentityResult.Failed();
        }

        public async Task<SignInResult> Login(UserLoginVM user)
        {
            return await accountManager.Login(user);
        }
        public async Task Signout()
        {
           await accountManager.Signout();
        }
    }
}
