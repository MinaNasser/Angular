using EShop.Manegers;
using EShop.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace EShop.Presentation.Controllers
{
    public class AccountController : Controller
    {
        private AccountManager accountManager;
        public AccountController(AccountManager _accountManager)
        {
            accountManager = _accountManager;
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Register(UserRegisterVM user)
        {
            if (ModelState.IsValid)
            {
                var res=  await accountManager.Register(user);
                if (res.Succeeded)
                {
                    return RedirectToAction("login");
                }
                else
                {
                    foreach (var item in res.Errors)
                    {
                        ModelState.AddModelError("", item.Description);
                    }
                    return View();
                }
            }
            return View();
        }


        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Login(UserLoginVM vmodel)
        {
            if (ModelState.IsValid)
            {
                var res = await accountManager.Login(vmodel);
                if (res.Succeeded)
                {
                    return RedirectToAction("index", "Home");
                }
                else if(res.IsLockedOut ||res.IsNotAllowed)
                {
                    ModelState.AddModelError("", "Sorry try again Later!!!!");
                }
                else
                {
                    ModelState.AddModelError("", "Sorry Invalid Email Or User Name Or Password");
                }
                return View();
            }
            return View();

        }
    }
}
