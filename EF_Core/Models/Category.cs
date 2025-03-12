using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;

namespace EF_Core.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public string? Image { get; set; }
        //Server Back end 
        //other Storage
        public virtual ICollection<Product> Products { get; set; }
    }

    public class CategoryConfigration : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> modelBuilder)
        {
            modelBuilder.HasKey(c => c.Id);
            modelBuilder.HasIndex(c => c.Name).IsUnique();
            modelBuilder.Property(c => c.Description).IsRequired(false);
            modelBuilder.Property(c => c.Image).IsRequired(false);

        }
    }
}
