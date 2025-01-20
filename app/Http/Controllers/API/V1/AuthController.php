<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\V1\Auth\LoginRequest;
use App\Http\Requests\API\V1\Auth\RegisterRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        try {
            $user = User::create([
                "name" => $request->name,
                "email" => $request->email,
                "password" => Hash::make($request->password),
            ]);

            event(new Registered($user));


            return response()->json([
                'message' => 'User registered successfully!',
                'user' => $user
            ], 201);

        } catch (\Exception $ex) {
            // return $ex; error check
            return response()->json([
                'error' => 'Unable to save the user record. Please refresh the webpage and try again. If the problem persists, contact the administrator.',
                'exception' => $ex->getMessage() 
            ], 500);
        }
    }

    public function login(LoginRequest $request)
    {
        return $request->all();
    }

    public function checkUserStatus(){

        $status = auth()->check() ? true : false;
        return response()->json([
            'status' => $status
        ],200);
    }
}