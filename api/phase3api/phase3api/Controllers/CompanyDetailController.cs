using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using phase3api.Model;

namespace phase3api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyDetailController : ControllerBase
    {
        private readonly CompanyDetailContext _context;

        public CompanyDetailController(CompanyDetailContext context)
        {
            _context = context;
        }

        // GET: api/CompanyDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CompanyDetail>>> GetCompanyDetails()
        {
            return await _context.CompanyDetails.ToListAsync();
        }

        // GET: api/CompanyDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CompanyDetail>> GetCompanyDetail(int id)
        {
            var companyDetail = await _context.CompanyDetails.FindAsync(id);

            if (companyDetail == null)
            {
                return NotFound();
            }

            return companyDetail;
        }

        // PUT: api/CompanyDetail/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompanyDetail(int id, CompanyDetail companyDetail)
        {
            if (id != companyDetail.CPId)
            {
                return BadRequest();
            }

            _context.Entry(companyDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompanyDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CompanyDetail
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<CompanyDetail>> PostCompanyDetail(CompanyDetail companyDetail)
        {
            _context.CompanyDetails.Add(companyDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompanyDetail", new { id = companyDetail.CPId }, companyDetail);
        }

        // DELETE: api/CompanyDetail/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CompanyDetail>> DeleteCompanyDetail(int id)
        {
            var companyDetail = await _context.CompanyDetails.FindAsync(id);
            if (companyDetail == null)
            {
                return NotFound();
            }

            _context.CompanyDetails.Remove(companyDetail);
            await _context.SaveChangesAsync();

            return companyDetail;
        }

        private bool CompanyDetailExists(int id)
        {
            return _context.CompanyDetails.Any(e => e.CPId == id);
        }
    }
}
