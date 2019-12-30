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
    public class invoicesController : ApiController
    {
        private Nhom14_WebShopEntities db = new Nhom14_WebShopEntities();

        // GET: api/invoices
        public IQueryable<invoice> Getinvoices()
        {
            return db.invoices;
        }

        // GET: api/invoices/5
        [ResponseType(typeof(invoice))]
        public async Task<IHttpActionResult> Getinvoice(int id)
        {
            invoice invoice = await db.invoices.FindAsync(id);
            if (invoice == null)
            {
                return NotFound();
            }

            return Ok(invoice);
        }

        // PUT: api/invoices/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putinvoice(int id, invoice invoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != invoice.id)
            {
                return BadRequest();
            }

            db.Entry(invoice).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!invoiceExists(id))
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

        // POST: api/invoices
        [ResponseType(typeof(invoice))]
        public async Task<IHttpActionResult> Postinvoice(invoice invoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.invoices.Add(invoice);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = invoice.id }, invoice);
        }

        // DELETE: api/invoices/5
        [ResponseType(typeof(invoice))]
        public async Task<IHttpActionResult> Deleteinvoice(int id)
        {
            invoice invoice = await db.invoices.FindAsync(id);
            if (invoice == null)
            {
                return NotFound();
            }

            db.invoices.Remove(invoice);
            await db.SaveChangesAsync();

            return Ok(invoice);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool invoiceExists(int id)
        {
            return db.invoices.Count(e => e.id == id) > 0;
        }
    }
}