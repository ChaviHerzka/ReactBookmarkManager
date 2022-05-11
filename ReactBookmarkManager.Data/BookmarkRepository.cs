using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ReactBookmarkManager.Data
{
    public class BookmarkRepository
    {
        private readonly string _connectionString;
        public BookmarkRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void AddBookmark(Bookmark bookmark)
        {
            var context = new BookmarksContext(_connectionString);
            context.Bookmarks.Add(bookmark);
            context.SaveChanges();
        }
        public List<Bookmark> GetBookmarks(int Id)
        {
            var context = new BookmarksContext(_connectionString);
            return context.Bookmarks.Where(b => b.UserId == Id).ToList();
        }

        public void Delete(int id)
        {
            var ctx = new BookmarksContext(_connectionString);
            ctx.Database.ExecuteSqlInterpolated($"Delete from Bookmarks where Id = {id}");
        }

        public void Update(string title, int id)
        {
            var ctx = new BookmarksContext(_connectionString);
            ctx.Database.ExecuteSqlInterpolated($"Update Bookmarks set Title = {title} where Id = {id}");
        }
        public List<TopUrl> GetTop5()
        { 
            using var ctx = new BookmarksContext(_connectionString);
            return ctx.Bookmarks
                .GroupBy(b => b.Url)
                .OrderByDescending(b => b.Count())
                .Take(5)
                .Select(b => new TopUrl { Count = b.Count(), Url = b.Key })
                .ToList();
        }
    }
}
