using EF_Core.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_Core
{
    public class EShopContext : IdentityDbContext<User>
    {
        //tables
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductAttachment> ProductAttachments { get; set; }
        public DbSet<Vendor> Vendors { get; set; }
        public DbSet<Shop> Shops { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies().UseSqlServer("Data source = DESKTOP-0KJMNFC; Initial catalog = E-Shopp; Integrated security= true; trustservercertificate = true;");
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProductConfigration());
            modelBuilder.ApplyConfiguration(new CategoryConfigration());
            modelBuilder.ApplyConfiguration(new ClientConfigration());
            modelBuilder.ApplyConfiguration(new OrderConfigration());
            modelBuilder.ApplyConfiguration(new OrderItemConfigration());
            modelBuilder.ApplyConfiguration(new ProductAttachmentConfigration());
            modelBuilder.ApplyConfiguration(new ShopConfigration());
            modelBuilder.ApplyConfiguration(new VendorConfigration());

            //init Create Tables with some Data
            modelBuilder.DataSeeding();

            base.OnModelCreating(modelBuilder);
        }
    }
}
