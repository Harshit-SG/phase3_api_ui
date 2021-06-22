using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace phase3api.Model
{
    public class IpoContext:DbContext
    {
        public IpoContext(DbContextOptions<IpoContext> options) : base(options)
        {

        }
        public DbSet<Ipo> Ipo { get; set; }
    }
}
