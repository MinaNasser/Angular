using EShop.Manegers;
using EShop.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Security.Claims;
using System.Threading.Tasks;

namespace EShop.Presentation.Controllers
{
    public class AccountController : Controller
    {
        private AccountManager accountManager;
        private RoleManager roleManager;
        public AccountController(AccountManager _accountManager, RoleManager roleManager)
        {
            accountManager = _accountManager;
            this.roleManager = roleManager;
        }

        [HttpGet]
        public IActionResult Register()
        {
            var list = roleManager.GetList(r => r.Name != "Admin")
                .Select(r=>new SelectListItem(r.Name,r.Name)).ToList();
            ViewData["roles"] = list;
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Register(UserRegisterVM user)
        {
            var list = roleManager.GetList(r => r.Name != "Admin")
             .Select(r => new SelectListItem(r.Name, r.Name)).ToList();
            ViewData["roles"] = list;
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
                    var role = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Role ).Value;
                    if(role=="Vendor")
                    return RedirectToAction("index", "Product");
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
