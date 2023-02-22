<?php

namespace App\Http\Controllers\Frontend;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
    //

    public function register() {
        return view('frontend.register.index');
    }

    public function postRegister(Request $request) {
        $request->validate([
            'name' => 'required|string',
            'phoneNumber' => 'required',
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->phoneNumber = $request->phoneNumber;
        $user->gender = $request->gender;
        $user->role = $request->role;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json(['message' => 'Đăng kí thành công']);
    }

    //
    
    public function login(Request $request)
    {
        $credentials = $request->validate([
               'email' => 'required|email',
               'password' =>'required|min:6'
           ]);
        if (Auth::attempt($credentials)) {
                $user = Auth::user();
                if ($user->hasRole('user')) { // Kiểm tra role của user
                    $cookie = cookie('login', true, 60);
                    return redirect(route('home'))->cookie($cookie);
                } else {
                    Auth::logout();
                    return response()->json(['error' => 'Thông tin tài khoản không đúng']);
                }
            } else {
                return response()->json(['error' => 'Thông tin tài khoản không đúng']);
            }
    }
    public function logout() {
        Auth()->logout();
        return redirect(route('home'));
    }
}
