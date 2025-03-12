using EF_Core;
using Microsoft.AspNetCore.Mvc;

namespace EShop.Presentation.Controllers
{
    public class ProductController : Controller
    {
        private EShopContext context = new EShopContext();

        //    .... /product/index
        //    .... /product
        public IActionResult Index()
        {
            return View();
        }
    }
}
