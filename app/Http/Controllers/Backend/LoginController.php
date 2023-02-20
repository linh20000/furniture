<?php

namespace App\Http\Controllers\Backend;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class LoginController extends Controller
{
    //show login
    public function showLogin() {
        if (Auth::check()) {
            return redirect(route('admin.home'));
        } 
        return view('backend.login.login');
    }

    // dashboard
    public function showHome() {
        return view('backend.home.index');
    }
    
    // login
    public function login(Request $request) {  
        $credential = $request->validate([
               'email' => 'required|email',
               'password' =>'required|min:6'
           ]);
        
        if (Auth::attempt($credential)) {
            $request->session()->regenerate();
            return redirect(route('admin.home'));
        } 
        
        return back()->with('message','Sai tên đăng nhập hoặc mật khẩu');
    }
    //logout
    public function logout() {
        Auth()->logout();
        return view('backend.login.login');
    }
    
}
