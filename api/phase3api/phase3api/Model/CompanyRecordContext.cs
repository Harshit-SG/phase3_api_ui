using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace phase3api.Model
{
    public class CompanyRecordContext: DbContext
    {
        public CompanyRecordContext(DbContextOptions<CompanyRecordContext> options) : base(options)
        {

        }
        public DbSet<CompanyRecords> CompanyRecords { get; set; }
    }
}
