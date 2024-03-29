using Microsoft.AspNetCore.Mvc;
using placeholder_scada_back.DTO;
using placeholder_scada_back.Entities;
using placeholder_scada_back.Services;

namespace placeholder_scada_back.Controllers;

[ApiController]
[Route("api/user")]
public class UserController : ControllerBase
{

    public IUserService UserService { get; set; }

    public UserController(IUserService userService)
    {
        UserService = userService;
    }

    [HttpPost]
    [Route("login")]
    public async Task<ActionResult<UserDto>> Login([FromBody] CreateUserDto createUserDto)
    {
        User? user = await UserService.Login(createUserDto);
        if (user == null)
        {
            return BadRequest("Bad credentials!");
        }
        else
        {
            return Ok(new UserDto(user));
        }
    }

    [HttpPost]
    [Route("register")]
    public async Task<ActionResult<bool>> Register([FromBody] CreateUserDto createUserDto)
    {
        try
        {
            return Ok(await UserService.Register(createUserDto));
        }
        catch (Exception exception)
        {
            return BadRequest(exception.Message);
        }
    }
}