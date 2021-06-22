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
    public class IpoController : ControllerBase
    {
        private readonly IpoContext _context;

        public IpoController(IpoContext context)
        {
            _context = context;
        }

        // GET: api/Ipo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ipo>>> GetIpo()
        {
            return await _context.Ipo.ToListAsync();
        }

        // GET: api/Ipo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ipo>> GetIpo(int id)
        {
            var ipo = await _context.Ipo.FindAsync(id);

            if (ipo == null)
            {
                return NotFound();
            }

            return ipo;
        }

        // PUT: api/Ipo/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIpo(int id, Ipo ipo)
        {
            if (id != ipo.IpoId)
            {
                return BadRequest();
            }

            _context.Entry(ipo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IpoExists(id))
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

        // POST: api/Ipo
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Ipo>> PostIpo(Ipo ipo)
        {
            _context.Ipo.Add(ipo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIpo", new { id = ipo.IpoId }, ipo);
        }

        // DELETE: api/Ipo/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Ipo>> DeleteIpo(int id)
        {
            var ipo = await _context.Ipo.FindAsync(id);
            if (ipo == null)
            {
                return NotFound();
            }

            _context.Ipo.Remove(ipo);
            await _context.SaveChangesAsync();

            return ipo;
        }

        private bool IpoExists(int id)
        {
            return _context.Ipo.Any(e => e.IpoId == id);
        }
    }
}
