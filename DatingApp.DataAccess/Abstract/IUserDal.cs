using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.Core.DataAccess;
using DatingApp.Core.Utilities.Helpers.AppHeaderHelper;
using DatingApp.Entities.Concrete;

namespace DatingApp.DataAccess.Abstract
{
    public interface IUserDal:IEntityRepository<User>
    {
        Task<bool> UserExist(string email);
        Task<PagedList<User>> GetUsersWithPhotos(UserParams userParams);
        Task<User> GetUserWithPhotos(int userId);
        Task<User> CheckUserForLogin(string email);
        Task<PagedList<User>> GetUserLikers(UserParams userParams);
        Task<User> GetUserWithRoles(int userId);
        Task<IEnumerable<User>> GetUsersWithRoles();
       
    }
}