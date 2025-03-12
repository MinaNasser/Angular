using EF_Core;
using Microsoft.AspNetCore.Mvc;

namespace EShop.Presentation.Controllers
{
    public class CategoryController : Controller
    {
        private EShopContext context = new EShopContext();
        //    ...... /Categry/list
        public IActionResult List()
        {
            var list = context.Categories.ToList();

            return View(list);
        }
    }
}
