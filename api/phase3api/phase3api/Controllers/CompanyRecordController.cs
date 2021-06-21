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
    public class CompanyRecordController : ControllerBase
    {
        private readonly CompanyRecordContext _context;

        public CompanyRecordController(CompanyRecordContext context)
        {
            _context = context;
        }

        // GET: api/CompanyRecord
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CompanyRecords>>> GetCompanyRecords()
        {
            return await _context.CompanyRecords.ToListAsync();
        }

        // GET: api/CompanyRecord/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CompanyRecords>> GetCompanyRecords(int id)
        {
            var companyRecords = await _context.CompanyRecords.FindAsync(id);

            if (companyRecords == null)
            {
                return NotFound();
            }

            return companyRecords;
        }

        // PUT: api/CompanyRecord/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompanyRecords(int id, CompanyRecords companyRecords)
        {
            if (id != companyRecords.RcId)
            {
                return BadRequest();
            }

            _context.Entry(companyRecords).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompanyRecordsExists(id))
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

        // POST: api/CompanyRecord
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<CompanyRecords>> PostCompanyRecords(CompanyRecords companyRecords)
        {
            _context.CompanyRecords.Add(companyRecords);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompanyRecords", new { id = companyRecords.RcId }, companyRecords);
        }

        // DELETE: api/CompanyRecord/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CompanyRecords>> DeleteCompanyRecords(int id)
        {
            var companyRecords = await _context.CompanyRecords.FindAsync(id);
            if (companyRecords == null)
            {
                return NotFound();
            }

            _context.CompanyRecords.Remove(companyRecords);
            await _context.SaveChangesAsync();

            return companyRecords;
        }

        private bool CompanyRecordsExists(int id)
        {
            return _context.CompanyRecords.Any(e => e.RcId == id);
        }
    }
}
