using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace phase3api.Model
{
    public class Ipo
    {

        [Key]
        public int IpoId { get; set; }
        public string CompanyName { get; set; }
        public string BiddingDates { get; set; }
        public string PriceRange { get; set; }
        public string IssueSize { get; set; }
        public string ManagingDirector { get; set; }
    }
}
