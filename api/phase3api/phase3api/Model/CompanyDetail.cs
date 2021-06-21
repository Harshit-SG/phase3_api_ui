using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace phase3api.Model
{
    public class CompanyDetail
    {
        [Key]
        public int CPId{ get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string CompanyName { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string CEO { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Turnover { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Description { get; set; }
    }
}
