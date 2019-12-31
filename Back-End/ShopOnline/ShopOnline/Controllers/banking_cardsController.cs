using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using ShopOnline.Models;

namespace ShopOnline.Controllers
{
    public class banking_cardsController : ApiController
    {
        private Nhom14_WebShopEntities db = new Nhom14_WebShopEntities();

        // GET: api/banking_cards
        public IQueryable<banking_cards> Getbanking_cards()
        {
            return db.banking_cards;
        }

        // GET: api/banking_cards/5
        [ResponseType(typeof(banking_cards))]
        public async Task<IHttpActionResult> Getbanking_cards(int id)
        {
            banking_cards banking_cards = await db.banking_cards.FindAsync(id);
            if (banking_cards == null)
            {
                return NotFound();
            }

            return Ok(banking_cards);
        }

        // PUT: api/banking_cards/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putbanking_cards(int id, banking_cards banking_cards)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != banking_cards.id)
            {
                return BadRequest();
            }

            db.Entry(banking_cards).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!banking_cardsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/banking_cards
        [ResponseType(typeof(banking_cards))]
        public async Task<IHttpActionResult> Postbanking_cards(banking_cards banking_cards)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.banking_cards.Add(banking_cards);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = banking_cards.id }, banking_cards);
        }

        // DELETE: api/banking_cards/5
        [ResponseType(typeof(banking_cards))]
        public async Task<IHttpActionResult> Deletebanking_cards(int id)
        {
            banking_cards banking_cards = await db.banking_cards.FindAsync(id);
            if (banking_cards == null)
            {
                return NotFound();
            }

            db.banking_cards.Remove(banking_cards);
            await db.SaveChangesAsync();

            return Ok(banking_cards);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool banking_cardsExists(int id)
        {
            return db.banking_cards.Count(e => e.id == id) > 0;
        }
    }
}