using EF_Core;
using EF_Core.Models;
using EShop.ViewModels;
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
            var list = context.Products.Select(prd=>prd.ToDetailsVModel()).ToList();
            return View(list);
        }

        [HttpGet]
        public IActionResult Add()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Add(AddProductViewModel viewModel)
        {
            if (ModelState.IsValid)
            {
                //add to db
                context.Products.Add(viewModel.ToModel());
                context.SaveChanges();

                return RedirectToAction("index");
            }
            return View();
        }
    }
}
