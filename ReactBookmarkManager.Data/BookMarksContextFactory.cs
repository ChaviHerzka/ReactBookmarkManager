using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactBookmarkManager.Data
{
    namespace ReactAuthDemo.Data
    {
        public class BookMarksContextFactory : IDesignTimeDbContextFactory<BookmarksContext>
        {
            public BookmarksContext CreateDbContext(string[] args)
            {
                var config = new ConfigurationBuilder()
                    .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}ReactBookmarkManager.Web"))
                    .AddJsonFile("appsettings.json")
                    .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

                return new BookmarksContext(config.GetConnectionString("ConStr"));
            }
        }
    }
}

