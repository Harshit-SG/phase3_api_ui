using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace phase3api.Model
{
    public class CompanyDetailContext:DbContext
    {
        public CompanyDetailContext(DbContextOptions<CompanyDetailContext> options ) : base(options)
        {

        }
        public DbSet<CompanyDetail> CompanyDetails { get; set; }
    }
}
