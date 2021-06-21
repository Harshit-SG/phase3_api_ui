using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace phase3api.Model
{
    public class CompanyRecords
    {
        [Key]
        public int RcId { get; set; }
        public string CompanyCode { get; set; }
        public string PricePerShare { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
    }
}
