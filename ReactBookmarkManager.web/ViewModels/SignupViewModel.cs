using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactBookmarkManager.Data;

namespace ReactBookmarkManager.web.ViewModels
{
    public class SignupViewModel : User
    {
        public string Password { get; set; }
    }
}
