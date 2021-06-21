using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace phase3api_signup.Models
{
    public class ApplicationSettings
    {
        public string JWT_Secret { get; set; }
        public string Client_URL { get; set; }
    }
}
