using EF_Core;
using EShop.Manegers;
using EShop.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace EShop.Presentation.Controllers
{
    public class ProductController : Controller
    {
        private EShopContext context;
        private ProductManager ProductManager;
        public ProductController()
        {
            ProductManager = new ProductManager();
            context =  new EShopContext();
        }

        //    .... /product/index
        //    .... /product
        public IActionResult Index(string searchText = "", decimal price = 0,
            int categoryId = 0, string vendorId = "", int pageNumber = 1,
            int pageSize = 4)
        {
            var list = ProductManager.Search(categoryId:categoryId, vendorId:vendorId,
                searchText: searchText,price:price,pageNumber:pageNumber,pageSize:pageSize);
            return View(list);
        }

        [HttpGet]
        public IActionResult Add()
        {


            ViewData["CategoriesList"] = GetCategories();
            //cast  

            ViewBag.Title = "Welcome";
            //no cast
            return View();
        }
        [HttpPost]
        public IActionResult Add(AddProductViewModel viewModel)
        {
            if (ModelState.IsValid)
            {
                //add to db
                //.../Images/Products/xyz.png
                //
                foreach (var file in viewModel.Attachments)
                {
                    FileStream fileStream = new FileStream(
                            Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "Images" ,"Products", file.FileName),
                            FileMode.Create);

                    file.CopyTo(fileStream);

                    fileStream.Position = 0;

                    //save path to database;
                    viewModel.Paths.Add($"/Images/Products/{file.FileName}");

                }

                context.Products.Add(viewModel.ToModel());
                context.SaveChanges();
                return RedirectToAction("index");
            }

            ViewData["CategoriesList"] = GetCategories();
            return View();
        }
        private List<SelectListItem> GetCategories()
        {
            return context.Categories
    .Select(cat => new SelectListItem(cat.Name, cat.Id.ToString())).ToList();
        }
    }
}
