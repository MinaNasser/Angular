using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_Core.Models
{
    public class User : IdentityUser
    {

        public virtual Client? Client { get; set; }
        public virtual Vendor? Vendor { get; set; }

    }
}
